const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

import { Schema } from "mongoose";

const IssueSchema = new Schema({
description: String,
createdAt: Date,
status: String,
priority: String,

})

module.exports = {
    IssueSchema,
}