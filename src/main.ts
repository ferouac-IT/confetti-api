import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Configure basic Swagger docs
  const config = new DocumentBuilder()
    .setTitle('Confetti API')
    .setDescription('API documentation for the Confetti event planning platform')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT || 3000);
  console.log(`API listening on port ${process.env.PORT || 3000}`);
}
bootstrap();
