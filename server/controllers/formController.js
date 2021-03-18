import FormDocument from '../models/formModel.js'
import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

export const getPosts = async(req,res) => {
    try {
        const formData = await FormDocument.find()

        res.status(200).json(formData)
    } catch (error) {
        res.status(404).json({message:error})
    }
}

export const createPost = async(req,res) => {
    const {name,email,message,preference} = req.body

    const newFormDoc = new FormDocument({name,email,message,preference})

    try {
        await newFormDoc.save()
        res.status(201).json(newFormDoc)
    } catch (error) {
        res.status(409).json({message:error})
    }
}