/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('notes').del()
  await knex('notes').insert([
    {
     id: "8875805f-733f-8c18-0f43-57b71826bfc0",
     title: 'ITパスポート過去問道場',
     content: '"https://www.itpassportsiken.com/ipkakomon.php',
     updateDay: '1686188610039'
    },
    {
     id: "3e49e3c7-4613-7bf6-0dfc-0ab7f293e006",
     title: 'React hooksを基礎から理解する',
     content: 'URL\nhttps://qiita.com/seira/items/f063e262b1d57d7e78b4',
     updateDay: '1686190364974'
    },
    {
     id: "6e96c7d1-75e2-ba25-a198-56437af7c8e3",
     title: 'Git研修【MIXI 23新卒技術研修】',
     content: '時間を作って勉強したい資料です',
     updateDay: '1686189048748'
    }
  ]);
};