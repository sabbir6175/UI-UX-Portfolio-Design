"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'customer'], default: 'customer' },
    profile: {
        avatar: { type: String },
        bio: { type: String },
    },
    isActive: { type: Boolean, default: true },
}, { timestamps: true } // automatically adds createdAt and updatedAt
);
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
