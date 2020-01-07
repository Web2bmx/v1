<div id="dialog-question-1" class="dialog question">
    <?php $q = 1; include "include/include_question.php"; ?>
    <nav><a id="next-1" class="boton answer next" href="#stage-2">Siguiente</a></nav>
</div>
<div id="dialog-question-2" class="dialog question">
    <?php $q = 2; include "include/include_question.php"; ?>
    <nav><a id="back-2" class="boton answer back" href="#stage-1">Regresar</a><a id="next-2" class="boton answer next" href="#stage-3">Siguiente</a></nav>
</div>
<div id="dialog-question-3" class="dialog question">
    <?php $q = 3; include "include/include_question.php"; ?>
    <nav><a id="back-3" class="boton answer back" href="#stage-2">Regresar</a><a id="next-3" class="boton answer next" href="#stage-end">Siguiente</a></nav>
</div>