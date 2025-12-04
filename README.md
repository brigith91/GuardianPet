🐾 GuardianPet: Siempre al lado de tu mascota
🌟 Visión General del Proyecto
GuardianPet es una plataforma web intuitiva diseñada para simplificar y centralizar la gestión de la salud y el bienestar de las mascotas para cuidadores comunes.
El Problema que Resolvemos
La gestión tradicional del cuidado animal resulta insuficiente; los cuidadores dependen de calendarios manuales y fichas dispersas, lo que dificulta la trazabilidad del historial clínico y provoca descuidos en calendarios de vacunación y citas. Esto incrementa el riesgo de enfermedades prevenibles.
Nuestra Solución
Proponemos un sistema centralizado que digitaliza el historial médico, automatiza recordatorios y brinda asistencia proactiva, promoviendo así la tenencia responsable y el bienestar animal.

--------------------------------------------------------------------------------
✨ Funcionalidades Clave
Las funcionalidades se definieron basándose en encuestas a usuarios, priorizando las necesidades más críticas (como los recordatorios, solicitados por el 72.2% de los encuestados, y el historial médico, por el 66.7%):
Requerimiento
Descripción
Justificación
Historial Clínico Digital
Registro centralizado de vacunas, tratamientos, operaciones, alergias y diagnósticos. Permite adjuntar archivos como fotos o resultados de exámenes (funcionalidad valorada por el 73% de los encuestados).
Asegura la trazabilidad clínica y evita la pérdida de información dispersa.
Notificaciones Automáticas
Envío de alertas sobre citas, vencimiento de vacunas y recordatorios importantes, personalizables y utilizando medios accesibles como el correo electrónico.
Resuelve el problema del incumplimiento de calendarios preventivos y reduce los descuidos.
Chatbot de Asistencia
Componente conversacional que brinda recomendaciones preventivas sobre alimentación, ejercicio e higiene.
Aborda el desconocimiento de pautas de cuidado (el 56.8% de los usuarios desconoce la alimentación correcta), ofreciendo orientación proactiva.
Gestión Multirol
El sistema permite el acceso de múltiples usuarios (dueños/cuidadores y veterinarios/administradores) para registrar, consultar y validar procedimientos según su rol.
Garantiza la seguridad y trazabilidad de la información clínica.
Mapa de Veterinarias
Permite al usuario localizar clínicas cercanas para atención de emergencia o consultas.
Ofrece un punto de referencia esencial para la atención oportuna.

--------------------------------------------------------------------------------
🛠️ Arquitectura y Tecnología
El proyecto sigue una arquitectura Modelo-Vista-Controlador (MVC), priorizando la facilidad de uso y la seguridad de la información.
Stack Tecnológico Principal
Capa/Rol
Tecnología
Justificación y Uso Específico
Backend (Controlador)
JavaScript (Node.js)
Lenguaje principal de implementación para gestionar la lógica de negocio, rutas y autenticación de usuarios.
Frontend (Vista)
HTML y CSS
Utilizado para diseñar una interfaz clara, sencilla e intuitiva.
Base de Datos (Modelo)
MySQL (Relacional)
Centraliza la información del usuario y de cada mascota, garantizando la integridad y disponibilidad mediante un diseño relacional.
ORM
Prisma ORM
Se utiliza para facilitar la conexión entre el backend y la base de datos, simplificando las operaciones CRUD (Crear, Leer, Actualizar, Eliminar).
Metodología de Desarrollo
El desarrollo se guió por un enfoque integrado para garantizar la calidad y la adaptación continua a las necesidades reales del usuario:
• Metodología Ágil Scrum: Organización del trabajo en sprints iterativos para la entrega incremental y la retroalimentación continua.
• Investigación Basada en el Diseño (DBR): Asegura que la solución sea flexible y validada a través de ciclos de análisis, diseño e implementación basados en el contexto real de los cuidadores.
• Estándar de Calidad: Adopción de la norma ISO/IEC 12207 para los procesos de desarrollo y mantenimiento de software, garantizando un producto funcional y sostenible.
Estructura del Repositorio
El código fuente sigue una estructura modular para facilitar la escalabilidad y el mantenimiento:
GuardianPet/
.src/            # Núcleo funcional (Controladores, Rutas y Lógica de Negocio en JavaScript)
.prisma/         # Modelo de datos y relaciones de MySQL (schema.prisma) 
.public/         # Archivos estáticos (CSS, imágenes) 
.views/          # Componentes del Frontend (Vistas)
.gitignore

--------------------------------------------------------------------------------
 Estado del Proyecto y Limitaciones
• Estado: El proyecto se encuentra en una fase funcional inicial (MVP). Se ha implementado el diseño del frontend, el funcionamiento inicial del backend, la base de datos y el módulo de notificaciones.
• Pendientes (Recomendaciones futuras): Aunque se logró avanzar en las funcionalidades principales, quedan pendientes: completar ciertas funciones planificadas, realizar pruebas más amplias con usuarios y fortalecer los módulos existentes.
• Delimitaciones: La versión inicial está limitada a una cobertura local (una clínica específica) y no incluye la implementación de pagos en línea, inventario o herramientas de IA avanzada para diagnósticos.

--------------------------------------------------------------------------------
Enlace al Repositorio https://github.com/brigith91/GuardianPet
