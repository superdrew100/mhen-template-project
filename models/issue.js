import { Schema } from "mongoose";

const IssueSchema = new Schema({
description: String,
createdAt: Date,
status: String,
priority: String,

})