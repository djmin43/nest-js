import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllFruitAndVege(): Promise<import(".prisma/client").FruitAndVege[]>;
}
