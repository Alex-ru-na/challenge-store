import { Request, Response } from "express";
import { GetClosestStoreService } from "../../domain/services/getClosestStore.service";
import ResponseExpress from "../../../../common/adapters/responseExpressAdapter";

class GetStoresController {
  public async getClosestStore(req: Request, res: Response) {
    const responseExpress = new ResponseExpress();
    try {
      const getClosestStoreService = new GetClosestStoreService();
      const client= req?.body?.client;
      let result = await getClosestStoreService.main(client);
      return responseExpress.successResponse(res, result);
    } catch (error: any) {
      return responseExpress.errorResponse(res, error as Error);
    }
  }
}

export default GetStoresController;
