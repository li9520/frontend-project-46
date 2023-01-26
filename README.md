### Hexlet tests and linter status:
[![Actions Status](https://github.com/li9520/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/li9520/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/e2b53a5fecc06ad5db54/maintainability)](https://codeclimate.com/github/li9520/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e2b53a5fecc06ad5db54/test_coverage)](https://codeclimate.com/github/li9520/frontend-project-46/test_coverage)
[![test](https://github.com/li9520/frontend-project-46/actions/workflows/test.yml/badge.svg)](https://github.com/li9520/frontend-project-46/actions/workflows/test.yml)

# Вычислитель отличий
Вычислитель отличий – программа, определяющая разницу между двумя файлами. 

Возможности утилиты:
- Поддержка разных входных форматов: yaml, json.
- Генерация отчета в виде plain text, stylish и json.

## Установка
- Клонируете репозиторий
- Переходите в корневую директорию проекта `cd frontend-project-46`
- Используйте команду `make install`
- Установите пакет в систему с помощью `npm link`. Может потребовать запуск с `sudo`.

## Запуск

```
$ gendiff --help
Usage: gendiff [options] <firstConfig> <secondConfig>

Compares two configuration files and shows a difference.

Options:
-V, --version        output the version number
-f, --format [type]  Output format (default: "stylish")
-h, --help           output usage information
```

## Примеры работы программы
### Сравнение плоских файлов
file1:  
```
{
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
}
```
file2:  
```
{
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
}
```  
запуск:
```
gendiff 'file1.json' 'file2.json'
```
[![asciicast](https://asciinema.org/a/0xZ29PouuMT5BmWLbLKVIYgrv.svg)](https://asciinema.org/a/0xZ29PouuMT5BmWLbLKVIYgrv)

### Сравнение файлов со сложной структурой и генерация отчетов в виде stylish
[![asciicast](https://asciinema.org/a/HKHLM0Bz4zGLDjWXlnLCIRYfi.svg)](https://asciinema.org/a/HKHLM0Bz4zGLDjWXlnLCIRYfi)

### Сравнение файлов со сложной структурой и генерация отчетов в виде plain
[![asciicast](https://asciinema.org/a/S63m125o3DGpxw8evQcLwOTCA.svg)](https://asciinema.org/a/S63m125o3DGpxw8evQcLwOTCA)

### Сравнение файлов со сложной структурой и генерация отчетов в виде json
[![asciicast](https://asciinema.org/a/3JIvlTLjDtU2vIT5Xzq7PPpLu.svg)](https://asciinema.org/a/3JIvlTLjDtU2vIT5Xzq7PPpLu)