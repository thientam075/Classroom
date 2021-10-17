const connection = require('./knex');

module.exports = {
    getAll(){
        return connection('classroom');
    },
    getOne(id){
        return connection('classroom').where('id',id).first();
    },
    createOne(lophoc){
        return connection('classroom').insert({
            id: lophoc.id, title: lophoc.title, description: lophoc.description
        });
    },
    updateOne(lophoc){
        return connection('classroom').where('id',lophoc.id).update(lophoc, '*');
    },
    deleteOne(id){
        return connection('classroom').where('id',id).del();
    }
};