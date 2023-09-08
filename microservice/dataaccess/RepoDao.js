const db = require("../db"); // Import the database connection

async function getAllRepos() {
  try {
    const tableQuery = `
	SELECT table_name
	FROM information_schema.tables
	WHERE table_schema = $1
  `;
    const { rows: tableRows } = await db.query(tableQuery, [schemaName]);

    return tableRows;
  } catch (error) {
    console.error("Error querying the database:", error);
    throw error;
  }
}

module.exports = {
  getAllRepos,
};
