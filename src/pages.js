const Database = require('./database/db')

const{ subjects, weekdays, getSubject, convertHoursToMinutes} = require('./utils/format')
// const { catch } = require('./database/db')

function pageLanding(req, res){
    return res.render("index.html")
}

async function pageStudy(req, res){
    const filters = req.query //Usado para fazer requerimento. Retorno o valor requerido. 

    if (!filters.subject || !filters.weekdays || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays }) 
    }

    //converter horas e minutos
    const timeToMinutes = convertHoursToMinutes(filters.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekdays}
            AND class_schedule.time_from <= ${filters.ToMinutes}
            AND class_schedule.time_to > ${filters.ToMinutes}
        )
        AND classes.subject = '${filters.subject}'
    `

        //caso haja erro na hora da consulta do banco de dados
        try{
            const db = await Database
            const proffys = await db.all(query)

            return res.render('study.html', { proffys, subjects, filters, weekdays })

        } catch(error){
            console.log(error)
        }

}

function pageGiveClasses(req,res){
    const data = req.query

    
    const isNotEmpty = Object.keys(data).length > 0
    //se tiver data
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        //adicionar data ao a lista de proffys
        proffys.push(data)
        return res.redirect('/study') //Redireciona para a pagina do Study
    }
    
    //se não, não adicionar
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}