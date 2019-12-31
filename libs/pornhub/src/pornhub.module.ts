import { Module } from "@nestjs/common";
import { PornhubService } from "./pornhub.service";

@Module({
  providers: [PornhubService],
  exports: [PornhubService],
})
export class PornhubModule {}
