import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

<<<<<<< HEAD
<<<<<<< HEAD
@ApiTags('Основной контроллер')
=======
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

<<<<<<< HEAD
<<<<<<< HEAD
  @ApiOperation({summary: 'Получение файла с актуальной версией приложения'})
  @ApiResponse({status: 200})
  @Get('app/latest')
  async donwloadApp(@Res() res: Response) {
    const version = this.appService.getLatestVersion();
    const fileName = `BattleStar-${version.version}.zip`;
    const filePath = path.resolve(__dirname, '../app/latest/', fileName);
    res.download(filePath, fileName);;
  }
=======
=======
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
  @Get()
  async jwtAuth(){
    return 
  } 
<<<<<<< HEAD
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
=======
>>>>>>> parent of 6b3b361 (Fixed and create Download App latest version)
}
