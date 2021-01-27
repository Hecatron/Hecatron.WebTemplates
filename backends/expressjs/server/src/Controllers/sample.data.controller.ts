import { Controller, Get } from '@nestjs/common';

@Controller('/api/SampleData/WeatherForecasts')
export class SampleDataController {

  @Get()
  @Render('index')
  render() {
    const message = 'This action returns all cats';
    return { message };
  }

}
