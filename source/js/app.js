//АНИМАЦИЯ КНОПКИ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ
////////////////////////////////////////////////////////////////////////////
function initAnchorBtn() {
  $('[data-scroll-top]').on('click', function () {
    $('.modal-scrollable').animate(
      {
        scrollTop: 0,
      },
      1000,
    )
  })
}

//////////////////////////////////////////////////////////////////////////
//ВАЛИДАЦИЯ ИНПУТА
//////////////////////////////////////////////////////////////////////////
function filterInvalidCharacters() {
  $('input[name="name"]').on('input', function() {
    let value = $(this).val();
    $(this).val(value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, ''));
  });
}

/////////////////////////////////////////////////////////////////////////
//АНИМАЦИЯ ПРОГРЕССА ИНПУТА ГОРОД
//////////////////////////////////////////////////////////////////////////
function cityProgress(e) {
  e.preventDefault()
  if (!$(this).valid()) {
    return
  }
  var $input = $(this).find('.js-input-city')
  var $progress = $(this).find('.js-input-city-progress')
  var $percent = $(this).find('.js-input-city-percent')
  var value = 0
  var max = 100

  $input.addClass('active')

  var interval = setInterval(function () {
    value++
    $percent.text(value + '%')
    $progress.css({
      width: value + '%',
    })
    if (value === max) {
      clearInterval(interval)
      setTimeout(function () {
        $input.removeClass('active')
        $('[data-remodal-id=modal-form-city]').remodal().open()
      }, 700)
    }
  }, 40)
}

function initCityForm() {
  $('[data-city-form]').on('submit', cityProgress)
}

$(document).ready(function () {
  initAnchorBtn()
  filterInvalidCharacters()
  initCityForm()

  $('input').inputmask()
})
