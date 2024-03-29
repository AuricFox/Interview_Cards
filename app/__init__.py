from flask import Flask

def init_app():
    '''
    Initializes the flask application

    Parameter(s): None

    Output(s):
        app (Object): flask application object
    '''
    app = Flask(__name__, instance_relative_config=False)
    # Configured for development
    app.config.from_object('config.DevConfig')

    with app.app_context():
        # NOTE: Include routes and custom modules here
        from . import routes, database, utils

    return app