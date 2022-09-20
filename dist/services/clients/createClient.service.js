"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const clients_entity_1 = require("../../entities/clients.entity");
const CreateClientService = ({ name, email, telephone, created_at, }) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.AppDataSource.getRepository(clients_entity_1.Client);
    const newClient = clientRepository.create({
        name,
        email,
        telephone,
        created_at,
    });
    yield clientRepository.save(newClient);
    return newClient;
});
exports.default = CreateClientService;