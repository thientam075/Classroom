exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classroom').del()
    .then(function () {
      // Inserts seed entries
      return knex('classroom').insert([
        { title: 'PTUDW', description: 'Lớp học phát triển ứng dụng web'},
        { title: 'PTUDWNC', description: 'Lớp học phát triển ứng dụng web nâng cao'},
        { title: 'LTHDT', description: 'Lớp học lập trình hướng đối tượng'}
      ]);
    });
};
