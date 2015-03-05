# Mad Mimi Constructor

A *fork of the* clean, modern interface for the [Mad Mimi](http://madmimi.com) API.

Unlike the original API, there is no Promise support here, to keep this module lightweight and as tribute to da jcrugzz.

For detailed usage instructions, see the [Examples](https://github.com/donasaur/madmimi/tree/master/examples/examples.js).

## Installation

```npm install madmimi-constructor```

## Usage

```javascript
var madmimiConstructor = require('madmimi-constructor');

// Create an instance for each set of requests that involve the same protocol (http/https), email, and secret API key.
var madmimiInstance = new madmimiConstructor();

// Only call this once, maybe in an initializer.
madmimiInstance.configure({
  secure: false, // false means endpoint involves http; default: true
  email: 'nicholas@example.com',
  key: 'xxxxx'
});

```

The problem with the original [Mad Mimi interface](https://github.com/nicholaswyoung/madmimi) is that all API calls work with the same configurations object. If you wanted to call the API twice without waiting for one API call to complete, and each call involved different configurations (e.g., one call involved a https MadMimi endpoint(```https://api.madmimi.com```) while another call involved a http MM endpoint(```http://api.madmimi.com```), this would present a problem.

This is resolved in this module because the constructor of interest from the original module's library is exposed, so that developers can create an instance with a separate configuration object for each set of requests they want to send involving the same configuration details (protocol (http/https), email, and secret API key).

## License

Copyright (C) Nicholas Young, Original Machine LLC.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
