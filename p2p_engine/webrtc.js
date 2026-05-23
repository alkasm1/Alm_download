/* path: alm_download/p2p_engine/webrtc.js */

export class P2PEngine {
  constructor() {
    this.pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }]
    });

    this.onIce = () => {};
    this.pc.onicecandidate = (e) => {
      if (e.candidate) this.onIce(e.candidate);
    };
  }

  async createOffer() {
    const offer = await this.pc.createOffer();
    await this.pc.setLocalDescription(offer);
    return offer;
  }

  async handleOffer(offer) {
    await this.pc.setRemoteDescription(offer);
    const answer = await this.pc.createAnswer();
    await this.pc.setLocalDescription(answer);
    return answer;
  }

  async handleAnswer(answer) {
    await this.pc.setRemoteDescription(answer);
  }

  async addIce(cand) {
    await this.pc.addIceCandidate(cand);
  }
}
