import  mongoose from 'mongoose';

// Define the structure for repeatable items
const skillSchema = new mongoose.Schema({
    frontend: [{
        name: String,
        level: String
    }],
    backend: [{
        name: String,
        level: String
    }],
    programmingLanguages: [{
        name: String,
        level: String
    }],
    tools: [{
        tname: String,
        level: String
    }],
    softSkills: [{
        name: String,
        level: String
    }]
}, { _id: false });

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    techUsed: [{ type: String }],
    links: { liveLink: String, githubLink: String }
}, { _id: false });

const PortfolioSchema = new mongoose.Schema({
    // CRITICAL: Link to User or Default ID
    userId: {
        type: String, // Use String to accommodate ObjectId and the "DEFAULT_PORTFOLIO_ID" string
        required: true,
        unique: true,
    },
    // --- Core Content Fields ---
    name: { type: String, default: 'Default Portfolio Name' },
    address: { type: String, default: 'Default Address' },
    title: { type: String, default: 'Full-Stack Developer' },
    sortSummary: {
        type: String, trim: true,
        maxlength: 1000
    },
    longSummary: {
        type: String, trim: true,
        maxlength: 1000
    },

    // --- Array Fields for repeating items ---
    workedOnSkills: [
        {
            name: String,
            level: String
        }
    ],

    experience: [
        {
            company: String,
            position: String,
            startDate: String,
            endDate: String,
            address: String,
            description: String
        }
    ],
    skills: [skillSchema],
    projects: [projectSchema],

    contactEmail: String,
    githubUrl: String,
    linkedinUrl: String,

    lastUpdated: {
        type: Date,
        default: Date.now,
    }
});

export default mongoose.model('Portfolio', PortfolioSchema);