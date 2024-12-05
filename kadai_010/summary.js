// 文字色変化ボタン
$('#change-color').on('click', function () {
  $('#target').css('color', 'red');
});

// 文字内容変化ボタン
$('#change-text').on('click', function () {
  $('#target').text('文字内容変化ボタンを押しました');
});

// フェードアウトボタン
$('#fade-out').on('click', function () {
  $('#target').fadeOut();
});

// フェードアウトボタン
$('#fade-in').on('click', function () {
  $('#target').fadeIn();
});
