// dbConfig.js
export const dbConfig = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "exam",
    PORT:"3306",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
