"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postWithPoint = exports.FreelanceCategory = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const class_validator_1 = require("class-validator");
const freeLance_model_1 = require("./freeLance.model");
const userRequest_model_1 = require("./userRequest.model");
const staggingToPoint_model_1 = require("./staggingToPoint.model");
var FreelanceCategory;
(function (FreelanceCategory) {
    FreelanceCategory["WebDevelopment"] = "Web Development";
    FreelanceCategory["MobileDevelopment"] = "Mobile Development";
    FreelanceCategory["GraphicDesign"] = "Graphic Design";
    FreelanceCategory["WritingTranslation"] = "Writing/Translation";
    FreelanceCategory["DigitalMarketing"] = "Digital Marketing";
    FreelanceCategory["VideoAnimation"] = "Video/Animation";
    FreelanceCategory["DataEntryAdmin"] = "Data Entry/Admin";
    FreelanceCategory["CustomerService"] = "Customer Service";
    FreelanceCategory["SalesMarketing"] = "Sales/Marketing";
    FreelanceCategory["Consulting"] = "Consulting";
    FreelanceCategory["SEO"] = "Search Engine Optimization (SEO)";
    FreelanceCategory["ContentCreation"] = "Content Creation";
    FreelanceCategory["UIUXDesign"] = "UI/UX Design";
    FreelanceCategory["Photography"] = "Photography";
    FreelanceCategory["VirtualAssistance"] = "Virtual Assistance";
    FreelanceCategory["ProjectManagement"] = "Project Management";
    FreelanceCategory["Transcription"] = "Transcription";
    FreelanceCategory["Illustration"] = "Illustration";
    FreelanceCategory["VoiceOver"] = "Voice Over";
    FreelanceCategory["EventPlanning"] = "Event Planning";
    FreelanceCategory["Accounting"] = "Accounting/Bookkeeping";
    FreelanceCategory["LegalServices"] = "Legal Services";
    FreelanceCategory["Tutoring"] = "Tutoring/Education";
    FreelanceCategory["MusicProduction"] = "Music Production";
    FreelanceCategory["SoftwareTesting"] = "Software Testing";
    FreelanceCategory["BlockchainDevelopment"] = "Blockchain Development";
    FreelanceCategory["InteriorDesign"] = "Interior Design";
    FreelanceCategory["Architecture"] = "Architecture";
    FreelanceCategory["GameDevelopment"] = "Game Development";
    FreelanceCategory["AppTesting"] = "App Testing";
    FreelanceCategory["MarketResearch"] = "Market Research";
    FreelanceCategory["FinancialAnalysis"] = "Financial Analysis";
    FreelanceCategory["Copywriting"] = "Copywriting";
    FreelanceCategory["Branding"] = "Branding";
    FreelanceCategory["DataScience"] = "Data Science";
    FreelanceCategory["HumanResources"] = "Human Resources";
    FreelanceCategory["LanguageInstruction"] = "Language Instruction";
    FreelanceCategory["PodcastProduction"] = "Podcast Production";
    FreelanceCategory["ProofreadingEditing"] = "Proofreading/Editing";
    FreelanceCategory["ITNetworkAdministration"] = "IT/Network Administration";
    FreelanceCategory["Blogging"] = "Blogging";
    FreelanceCategory["FashionDesign"] = "Fashion Design";
    FreelanceCategory["FitnessTraining"] = "Fitness Training";
    FreelanceCategory["ResumeWriting"] = "Resume Writing";
    FreelanceCategory["PublicRelations"] = "Public Relations";
    FreelanceCategory["MarketAnalysis"] = "Market Analysis";
    FreelanceCategory["Cybersecurity"] = "Cybersecurity";
    FreelanceCategory["EventPhotography"] = "Event Photography";
    FreelanceCategory["EcommerceDevelopment"] = "E-commerce Development";
    FreelanceCategory["DataVisualization"] = "Data Visualization";
    FreelanceCategory["Animation"] = "Animation";
    FreelanceCategory["GrantWriting"] = "Grant Writing";
    FreelanceCategory["MedicalWriting"] = "Medical Writing";
    FreelanceCategory["ResearchWriting"] = "Research Writing";
    FreelanceCategory["PodcastEditing"] = "Podcast Editing";
    FreelanceCategory["UXResearch"] = "UX Research";
    FreelanceCategory["AppDevelopment"] = "App Development";
    FreelanceCategory["BlogManagement"] = "Blog Management";
    FreelanceCategory["ProductManagement"] = "Product Management";
    FreelanceCategory["MarketStrategy"] = "Market Strategy";
    FreelanceCategory["LanguageTranslation"] = "Language Translation";
    FreelanceCategory["TechnicalWriting"] = "Technical Writing";
    FreelanceCategory["DataEntry"] = "Data Entry";
    FreelanceCategory["MusicComposition"] = "Music Composition";
    FreelanceCategory["LegalWriting"] = "Legal Writing";
    FreelanceCategory["VirtualReality"] = "Virtual Reality";
    FreelanceCategory["VideoEditing"] = "Video Editing";
    FreelanceCategory["MachineLearning"] = "Machine Learning";
    FreelanceCategory["PhotoEditing"] = "Photo Editing";
    FreelanceCategory["GameDesign"] = "Game Design";
    FreelanceCategory["UIDesign"] = "UI Design";
    FreelanceCategory["UXDesign"] = "UX Design";
    FreelanceCategory["EventManagement"] = "Event Management";
    FreelanceCategory["SocialMediaAdvertising"] = "Social Media Advertising";
    FreelanceCategory["Copyediting"] = "Copyediting";
    FreelanceCategory["ResumeDesign"] = "Resume Design";
    FreelanceCategory["ITConsulting"] = "IT Consulting";
    FreelanceCategory["BusinessConsulting"] = "Business Consulting";
    FreelanceCategory["LogoDesign"] = "Logo Design";
    FreelanceCategory["InfographicDesign"] = "Infographic Design";
    FreelanceCategory["VoiceActing"] = "Voice Acting";
    FreelanceCategory["ContentMarketing"] = "Content Marketing";
    FreelanceCategory["Scriptwriting"] = "Scriptwriting";
    FreelanceCategory["BusinessPlanWriting"] = "Business Plan Writing";
    FreelanceCategory["PhotoRetouching"] = "Photo Retouching";
    FreelanceCategory["SEOWriting"] = "SEO Writing";
    FreelanceCategory["DataAnalysis"] = "Data Analysis";
    FreelanceCategory["HRConsulting"] = "HR Consulting";
    FreelanceCategory["UXDesignResearch"] = "UX Design Research";
    FreelanceCategory["TechnicalSupport"] = "Technical Support";
})(FreelanceCategory = exports.FreelanceCategory || (exports.FreelanceCategory = {}));
let postWithPoint = class postWithPoint extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], postWithPoint.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ENUM(...Object.values(FreelanceCategory)), allowNull: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'category is required' }),
    __metadata("design:type", String)
], postWithPoint.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, allowNull: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'content is required' }),
    __metadata("design:type", String)
], postWithPoint.prototype, "content", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'price is required' }),
    __metadata("design:type", Number)
], postWithPoint.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT, allowNull: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'numDays is required' }),
    __metadata("design:type", Number)
], postWithPoint.prototype, "numDays", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => freeLance_model_1.FreeLance),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    (0, class_validator_1.IsNotEmpty)({ message: 'freelanceId is required' }),
    __metadata("design:type", Number)
], postWithPoint.prototype, "freelaneId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => freeLance_model_1.FreeLance),
    __metadata("design:type", freeLance_model_1.FreeLance)
], postWithPoint.prototype, "freelane", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => userRequest_model_1.UserRequest, { onDelete: 'cascade', hooks: true }),
    __metadata("design:type", Array)
], postWithPoint.prototype, "userRequest", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => staggingToPoint_model_1.StaggingToPoint, { onDelete: 'cascade', hooks: true }),
    __metadata("design:type", Array)
], postWithPoint.prototype, "stagging", void 0);
postWithPoint = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'postWithPoint' })
], postWithPoint);
exports.postWithPoint = postWithPoint;
//# sourceMappingURL=postWithPoint.model.js.map