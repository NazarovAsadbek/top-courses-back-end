import { ConfigService } from "@nestjs/config";
import { TypegooseModuleOptions } from "nestjs-typegoose";

export const getMongoConfig = async (configService: ConfigService): Promise<TypegooseModuleOptions> => ({
  uri: getMongoString(configService),
  ...getMongoOptions()
});

const getMongoString = (configService: ConfigService) =>
  "mongodb://" +
  configService.get<string>("MONGO_LOGIN") +
  ":" +
  configService.get<string>("MONGO_PASSWORD") +
  "@" +
  configService.get<string>("MONGO_HOST") +
  ":" +
  configService.get<number>("MONGO_PORT") +
  "/" +
  configService.get<string>("MONGO_DB");

const getMongoOptions = () => ({});