module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        actionOptions: {
          upload: {
            folder: "unlockers",
          },
          delete: {},
        },
      },
    },
  },

	"strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5,
    },
	},

	email: {
		config: {
			provider: 'nodemailer',
			providerOptions: {
				host: 'smtp.gmail.com',
				port: 465,
				auth: {
					user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
				},
				secure: true // true for 465, false for other ports
			}
		},
    settings: {
      defaultFrom: env('SMTP_USERNAME'),
      defaultReplyTo: env('SMTP_USERNAME'),
    }
  }
});
