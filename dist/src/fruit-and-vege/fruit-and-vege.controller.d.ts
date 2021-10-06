import { FruitAndVegeService } from './fruit-and-vege.service';
export declare class FruitAndVegeController {
    private readonly fruitAndVegeService;
    constructor(fruitAndVegeService: FruitAndVegeService);
    getAllFruitAndVege(): Promise<import(".prisma/client").FruitAndVege[]>;
}
