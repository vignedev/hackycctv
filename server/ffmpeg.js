const path = require('path')
const cp = require("child_process")

module.exports = class Ffmpeg {
    constructor(config, folder, address) {
        this.config = config
        this.folder = folder
        this.instance = null

        this.stopped = false

        this.params = [
            '-i', address,
            '-c', 'copy',
            `-hls_time', '${config.segmentSize()}`,
            `-hls_start_number_source', 'epoch`,
            `-use_localtime', '1`
            `-timeout', '-1`,
            `-hls_flags', 'second_level_segment_duration`,
            `-hls_segment_filename "${path.resolve(config.base(), folder, config.segmentName())}"`,
            `"${path.resolve(config.base(), folder, config.name())}"`,
        ]
    }

    loop() {
        this.instance = cp.spawn('ffmpeg', this.params)
        this.instance.on('exit', () => {
            if (!this.stopped) {
                this.loop()
            }
        })
    }

    stop() {
        this.stopped = true

        if (this.instance) {
            this.instance.stdin.pause()
            this.instance.kill()
        }
    }
}