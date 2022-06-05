const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'DICOM VIRE Api',
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:7171/api/',
          description: 'Development server',
        },
      ],
    }
}

module.exports=options