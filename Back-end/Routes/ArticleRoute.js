import {
    addArticle,
    getAllArticles,
    getOneArticle,
    updateArticle,
    deleteArticle
    
} from '../Controllers/ArticleController.js';
import { Router } from 'express';
const router = Router();

router.post('/', addArticle);
router.get('/', getAllArticles);
router.get('/:id', getOneArticle);
router.patch('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export default router;
