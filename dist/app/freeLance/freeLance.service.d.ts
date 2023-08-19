import { JwtService } from "@nestjs/jwt";
import { Posts } from "src/database/models/post.model";
import { FreeLance } from "src/database/models/freeLance.model";
import { Service } from "src/database/models/service.model";
import { User } from "src/database/models/user.model";
import { Payment } from "src/database/models/payment.model";
import { Stagging } from "src/database/models/stagging.model";
import { WalletService } from "../wallet/wallet.service";
import { Category } from "src/database/models/category.model";
import { Ineterest } from "src/database/models/interest.model";
import { postWithPoint } from "src/database/models/postWithPoint.model";
import { UserRequest } from "src/database/models/userRequest.model";
import { StaggingToPoint } from "src/database/models/staggingToPoint.model";
import { PayAndRecive } from "src/database/models/payAndRecive.model";
export declare class FreeLanceService {
    private readonly UserModel;
    private readonly FreeLanceModel;
    private readonly ServiceModel;
    private publishModel;
    private readonly PaymentModel;
    private readonly staggingModele;
    private readonly staggingToPointModele;
    private readonly categoryModele;
    private readonly ineterestModele;
    private readonly userRequestModel;
    private readonly postPointModel;
    private readonly payAndReciveModel;
    private readonly jwtService;
    private readonly walletService;
    constructor(UserModel: typeof User, FreeLanceModel: typeof FreeLance, ServiceModel: typeof Service, publishModel: typeof Posts, PaymentModel: typeof Payment, staggingModele: typeof Stagging, staggingToPointModele: typeof StaggingToPoint, categoryModele: typeof Category, ineterestModele: typeof Ineterest, userRequestModel: typeof UserRequest, postPointModel: typeof postWithPoint, payAndReciveModel: typeof PayAndRecive, jwtService: JwtService, walletService: WalletService);
    getAllPost(): Promise<Posts[]>;
    getAllPostByCategory(category: string): Promise<Posts[]>;
    addService(service: Service, UserId: number, postId: number): Promise<Service>;
    checkMyService(id: number): Promise<Service[]>;
    showAcceptedServices(id: number): Promise<Service[]>;
    showstatisticalsinyear(year: number, userId: number): Promise<any[]>;
    searchAboutFreeLance(Fname: string, Lname: string): Promise<FreeLance[]>;
    uploadOrUpdatePhoto(photo: any, userId: number): Promise<FreeLance>;
    attachFile(file: string, fileType: string, serviceId: number): Promise<boolean>;
    showAllCategory(): Promise<Category[]>;
    addIneterest(categoryId: number, userId: number): Promise<Ineterest>;
    deleteIneterest(interestId: number, userId: number): Promise<boolean>;
    searchAboutCategory(catName: string): Promise<Category[]>;
    showMyInterest(userId: number): Promise<Ineterest[]>;
    showPostAboutInterest(userId: number): Promise<Posts[]>;
    addPost(post: postWithPoint, userId: number): Promise<postWithPoint>;
    deletePost(id: number): Promise<boolean>;
    showUserRequest(id: number): Promise<UserRequest[]>;
    acceptUserRequest(id: number): Promise<boolean>;
    rejectUserRequest(id: number): Promise<boolean>;
    attachFileToPostPoint(file: string, fileType: string, userRequestId: number): Promise<boolean>;
}
