import { HttpClient } from "@angular/common/http";
import { LoggerService } from "../services/logger.service";

export function loggerServiceFactory(): LoggerService {
  return new LoggerService();
}
