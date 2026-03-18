# BTG-fund-management
Manejo de Fondos (FPV/FIC) para clientes BTG

# Despliegue del aplicativo

El despliegue del aplicativo desarrollado se realizaría sobre la arquitectura de **AWS (Amazon Web Services)**, aprovechando su infraestructura para servir la aplicación de manera eficiente y segura.

Dicho despliegue se puede realizar de forma **manual o automática**, la cual se explicará a continuación:

### Despliegue Manual
1. Compilar el aplicativo usando el comando de build correspondiente de angular.
2. Subir los archivos generados **(dist/)** a un bucket de **Amazon S3**, configurado para hosting estático.
3. Configurar y acceder a la distribución de **Amazon Cloudfront** asociada al bucket.
4. Realizar la invalidación de cache en Cloudfront para garantizar que los cambios se reflejen inmediatamente en los usuarios finales.

Este enfoque es útil para despliegues controlados o pruebas rapidas, donde se desea supervisar cada paso del proceso.

### Despliegue Automático (CI/CD)
Para un flujo mas profesional y confiable, se puede implementar un pipeline de **Integración y Despliegue Continuo (CI/CD)** usando herramientas como:
* **Jenkins:** Orquestación de los pipelines de build y despliegue.
* **SonarQube:** Análisis de calidad del código antes del despliegue.
* **Jira:** Gestión de tareas y control de versiones asociado a los despliegues.

El flujo automático incluiría:
1. Contrucción del aplicativo al confirmar cambios en el repositorio.
2. Ejecución de pruebas unitarias y análisis de calidad de código.
3. Despliegue automático a S3, con configuración de invalidación de cache en Cloudfront, asegurando que los cambios estén disponibles inmediatamente en producción.

Este enfoque permite un despliegue repetible, seguro y escalable, garantizando que cualquier actualización de la aplicación llegue a los usuarios de manera rápida y confiable.