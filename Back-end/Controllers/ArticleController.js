// RoleController.js
import { db } from "../Models/index.js";

const Article = db.Articles;



// 1. Create new Article
const addArticle = async (req, res) => {
    let info = {
        image_url: req.body.image_url,
        title: req.body.title,
        category: req.body.category,
        author: req.body.author,
        body: req.body.body
    };

    try {
        const article = await Article.create(info);
        res.status(200).send(article);
    } catch (error) {
        console.error("Error creating Article:", error);
        res.status(500).send("Internal Server Error");
    }
};



// 2. get all articles
const getAllArticles = async (req, res) => {
    let articles = await Article.findAll({});
    res.status(200).send(articles);
}

// 3. get single article
const getOneArticle = async (req, res) => {
    let id = req.params.id;
    let article = await Article.findOne({ where: { id: id } });
    res.status(200).send(article);
}

// 4. update article
const updateArticle = async (req, res) => {
    let id = req.params.id;
    const article = await Article.update(req.body, { where: { id: id } });
    res.status(200).send(article);
}

// 5. delete article
const deleteArticle = async (req, res) => {
    let id = req.params.id;
    await Article.destroy({ where: { id: id } });
    res.status(200).send('Article deleted');
}

export {
    addArticle,
    getAllArticles,
    getOneArticle,
    updateArticle,
    deleteArticle
   
};
