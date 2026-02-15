# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from vulyk.models.task_types import AbstractTaskType

from vulyk_fluency_adequacy.models.tasks import FluencyAdequacyAnswer, FluencyAdequacyTask


class FluencyAdequacyTaskType(AbstractTaskType):
    """
    Fluency & Adequacy evaluation task to work with Vulyk.
    """

    answer_model = FluencyAdequacyAnswer
    task_model = FluencyAdequacyTask

    name = "Оцінка плавності та адекватності перекладу"
    description = "Оцінка плавності та адекватності перекладу речень за шкалою від 0 до 100"

    template = "base.html"
    helptext_template = "help.html"
    type_name = "fluency_adequacy_task"

    redundancy = 10

    JS_ASSETS = [
        "static/scripts/handlebars.js",
        "static/scripts/bootstrap-select.js",
        "static/scripts/base.js",
    ]

    CSS_ASSETS = [
        "static/styles/bootstrap-select.css",
        "static/styles/base.css",
    ]
