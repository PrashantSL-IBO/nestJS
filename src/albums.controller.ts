import {
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Redirect,
  Req,
} from '@nestjs/common';

@Controller('/album')
export class AlbumController {
  @Get('/')
  @Redirect('/users/contact')
  postAlbum(@Req() req: Request): string {
    console.log(req.headers);
    return 'Hello Prashant!!';
  }
}
