<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Cuestionario de verificación sobre análisis, control y mejora continua de costos de operación',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión del proceso de análisis, control y mejora continua de los costos de operación, mediante la identificación de desviaciones frente a costos históricos, presupuestados y estándar, la verificación de criterios de clasificación y asignación, el registro de hallazgos y la formulación de acciones de mejora de acuerdo con las políticas de la organización.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del análisis de costos de operación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Registrar únicamente los gastos administrativos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar los costos calculados con referentes para identificar desviaciones y oportunidades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Eliminar todos los costos indirectos del proceso productivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumentar el precio de venta sin revisar los costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué son los costos históricos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costos proyectados para el siguiente período.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costos ideales definidos por la gerencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costos realmente incurridos en períodos anteriores.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Costos que no se pueden comprobar documentalmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La fórmula básica para calcular una desviación frente al presupuesto es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costo real - costo presupuestado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Costo presupuestado / costo real.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costo estándar + costo indirecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costo total × unidades producidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Si el costo real es mayor que el costo presupuestado, la desviación se considera:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Favorable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nula.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No comparable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desfavorable.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Qué representa un costo estándar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El costo técnico esperado bajo condiciones normales de operación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El costo real registrado en la contabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El valor de venta del producto terminado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El gasto administrativo del período.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Para qué sirve la variación porcentual de costos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Para conocer el número de empleados de producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Para eliminar los costos indirectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Para medir la diferencia relativa entre el costo real y un costo base.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Para reemplazar los soportes contables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes ejemplos corresponde a un costo directo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Energía general de la planta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tela utilizada directamente en la fabricación de una prenda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Salario del supervisor de toda la planta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Servicio de vigilancia de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes recursos debe tratarse normalmente como costo indirecto?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Material principal de un producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mano de obra directa de un operario asignado a una orden.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Supervisor que atiende toda la planta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Insumo incorporado directamente al producto final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es una base de asignación?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El precio de venta del producto.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El documento donde se archivan las facturas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La utilidad neta del período.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La medida usada para distribuir costos indirectos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué riesgo existe si se usa una base de asignación que no representa el consumo real del recurso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se genera una distribución arbitraria o poco confiable de los costos indirectos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se mejora automáticamente la rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se eliminan los costos fijos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se aumenta la producción sin afectar los costos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué debe contener un reporte de hallazgos de costos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el nombre del analista.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el valor total de ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Período revisado, valor base, valor real, desviación, evidencia y recomendación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Solo la firma del gerente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es importante documentar las evidencias en la verificación de costos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque reemplazan el análisis técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque permiten sustentar el hallazgo y conservar trazabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Porque evitan calcular desviaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque eliminan la necesidad de controles internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué técnica permite comparar el desempeño de costos con referentes internos o externos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<i>Benchmarking.</i>',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Depreciación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inventario físico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nómina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Cuál es el objetivo de la optimización de costos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir costos sin considerar la calidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar todos los costos indirectos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el control documental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar el uso de recursos, reducir desperdicios y mantener la eficiencia operativa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Por qué la mejora continua es importante en el control de costos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite revisar, ajustar y fortalecer permanentemente los procesos de costos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque evita hacer seguimiento a las acciones correctivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque reemplaza los costos estándar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque solo se aplica al área comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué permite identificar el análisis de causa raíz en una desviación de costos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El precio de venta del producto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La utilidad neta de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El número de empleados administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El origen principal del problema que generó la desviación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es la finalidad de consolidar los hallazgos de costos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reunir los resultados de varias verificaciones para identificar patrones y prioridades de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar los soportes documentales del análisis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registrar únicamente los costos de ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar el cálculo del costo estándar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué acción corresponde a una mejora de costos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el desperdicio de materiales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener bases de asignación desactualizadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar una tasa de CIF cuando cambia el nivel de horas máquina',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Registrar costos sin evidencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué debe analizarse antes de implementar una alternativa de optimización de costos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo el valor de las ventas del mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Su viabilidad, impacto operativo y efecto sobre la calidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente el nombre del responsable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La eliminación total de los costos indirectos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de hacer seguimiento a las acciones correctivas en costos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar si la acción aplicada redujo o corrigió la desviación encontrada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Evitar registrar nuevos hallazgos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar todos los costos directos a indirectos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la comparación con costos históricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
