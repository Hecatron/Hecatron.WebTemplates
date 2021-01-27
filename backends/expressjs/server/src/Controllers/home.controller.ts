import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HomeController {

  @Get()
  @Render('index')
  render() {
    const message = 'This action returns all cats';
    return { message };
  }

}
