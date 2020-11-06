import React, { Component } from 'react'
import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://serene-falls-22234.herokuapp.com/authors'; 

export async function fetchAuthors() {
    try {
        const response = await request.get(`${URL}authors`);

        return response.body;

    } catch(err) {
        throw err;
    }
}

export async function fetchAuthor(someId) {
    try {
        const response = await request.get(`${URL}origins`); // this naming convention might cause issues

        return response.body;
    } catch(err) {
        throw err;
    }
}

export async function createAuthor(newAuthor) {
    try {
        await request
        .post(`${URL}authors`)
        .send(newAuthor);

        return;
    } catch(err) {
        throw err;
    }
}

export async function updateAuthor(someId, newAuthor) {
    try {
        await request
        .put(`${URL}authors/${someId}`)
        .send(newAuthor)

        return;
    }  catch(err) {
        throw err;
    }
}

export async function deleteAuthor(someId) {
    try {
        await request.delete(`${URL}authors/${someId}`);

        return;
    } catch(err) {
        throw err;
    }
}