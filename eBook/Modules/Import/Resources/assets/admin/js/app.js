import import_csv from './import_csv';


$('#btn-import').on('click', (e) => {
    e.preventDefault();

    let importType = $('#import_type').val();

    window.location.href = route('admin.download_csv.index', { import_type: importType });
});