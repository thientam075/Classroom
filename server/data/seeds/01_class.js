
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classroom').del()
    .then(function () {
      // Inserts seed entries
      return knex('classroom').insert([
        {id: 1, title: 'PTUDW', description: 'Lớp học phát triển ứng dụng web'},
        {id: 2, title: 'PTUDWNC', description: 'Lớp học phát triển ứng dụng web nâng cao'},
        {id: 3, title: 'LTHDT', description: 'Lớp học lập trình hướng đối tượng'}
      ]);
    });
};
