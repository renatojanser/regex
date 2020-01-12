const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d{1})/, '$1.$2')
            .replace(/(\d{3})(\d{1})/, '$1.$2')
            .replace(/(\d{3})(\d{1})/, '$1-$2')
            .replace(/(-\d{2})(\d)/, '$1')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.info

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})