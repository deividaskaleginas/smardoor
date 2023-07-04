const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: "root",
    password: "Testas123",
    database: "smartdoorDB",
  })
  .promise();

// kategorijos

const getCategories = async () => {
  const [rows] = await pool.query("SELECT * FROM kategorijos");
  return rows;
};

const createCategory = async ({ title, image, alt, href, categoryKey }) => {
  console.log(title, image, alt, href, categoryKey);
  await pool.query(
    `INSERT INTO kategorijos (title, image, alt, href, categoryKey)
  VALUES (?, ?, ?, ?, ?)`,
    [title, image, alt, href, categoryKey]
  );
};
const deleteCategory = async (id) => {
  await pool.query(`DELETE FROM kategorijos WHERE id = ?`, [id]);
};

// telefonspynes

const getTelefonspynes = async () => {
  const [rows] = await pool.query("SELECT * FROM telefonspynes");
  return rows;
};

const createTelefonspyne = async ({ title, image, alt, href, categoryKey }) => {
  console.log(title, image, alt, href, categoryKey);
  await pool.query(
    `INSERT INTO telefonspynes (title, image, alt, href, categoryKey)
  VALUES (?, ?, ?, ?, ?)`,
    [title, image, alt, href, categoryKey]
  );
};
const deleteTelefonspyne = async (id) => {
  await pool.query(`DELETE FROM telefonspynes WHERE id = ?`, [id]);
};

// vartu automatika

const getVartuAutomatika = async () => {
  const [rows] = await pool.query("SELECT * FROM vartuautomatika");
  return rows;
};

const createVartuAutomatika = async ({
  title,
  image,
  alt,
  href,
  categoryKey,
}) => {
  console.log(title, image, alt, href, categoryKey);
  await pool.query(
    `INSERT INTO vartuautomatika (title, image, alt, href, categoryKey)
  VALUES (?, ?, ?, ?, ?)`,
    [title, image, alt, href, categoryKey]
  );
};
const deleteVartuAutomatika = async (id) => {
  await pool.query(`DELETE FROM vartuautomatika WHERE id = ?`, [id]);
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  getTelefonspynes,
  createTelefonspyne,
  deleteTelefonspyne,
  getVartuAutomatika,
  createVartuAutomatika,
  deleteVartuAutomatika,
};
