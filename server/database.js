const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: "root",
    password: "Testas123",
    database: "smartdoor",
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

// monitoriai

const getMonitoriai = async () => {
  const [rows] = await pool.query("SELECT * FROM monitoriai");
  return rows;
};

const createMonitoriai = async ({
  title,
  images,
  alt,
  price,
  slug,
  monitor_description,
  technical_parameters,
  instruction,
  videos,
  technical_images,
}) => {
  await pool.query(
    `INSERT INTO monitoriai (title, images, alt, price, slug, monitor_description, technical_parameters, instruction, videos, technical_images)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      title,
      images,
      alt,
      price,
      slug,
      monitor_description,
      technical_parameters,
      instruction,
      videos,
      technical_images,
    ]
  );
};

const deleteMonitoriai = async (id) => {
  await pool.query(`DELETE FROM monitoriai WHERE id = ?`, [id]);
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
  getMonitoriai,
  createMonitoriai,
  deleteMonitoriai,
};
