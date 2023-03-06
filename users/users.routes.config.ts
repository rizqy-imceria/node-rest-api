import { CommonRoutesConfig } from "../common/common.routes.config";
import express from 'express'

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UsersRoutes')
  }

  configureRoutes(): express.Application {
    this.app.route('/users')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('List of users')
      })

    return this.app
  }
}