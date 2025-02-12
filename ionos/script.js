

function showFeedback() 
{
    document.getElementById('initial').classList.add('hidden');
    document.getElementById('feedback').classList.remove('hidden');
}

function back() 
{
    document.getElementById('initial').classList.remove('hidden');
    document.getElementById('feedback').classList.add('hidden');
}