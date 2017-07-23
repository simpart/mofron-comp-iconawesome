/**
 * @file iconawesome/index.js
 */
require('mofron-comp-fontawesome');
require('mofron-comp-frame');

mofron.comp.IconAwesome = class extends mofron.comp.FontAwesome {
    
    constructor (prm_opt) {
        try {
            super(prm_opt);
            this.name('IconAwesome');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts(prm);
            let icon = this.target();
            
            this.vdom().delChild(0);
            let upd_tgt = new mofron.Dom('div', this);
            this.vdom().addChild(upd_tgt);
            this.target(upd_tgt);
            
            this.addChild(this.frame());
            this.target(
                this.child()[0].target()
            );
            this.target().addChild(icon);
            this.target(icon);
            icon.style({
                'position' : 'relative'
            });
            
            this.size(100);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    frame (frm) {
        try {
            if (undefined === frm) {
                /* getter */
                if (undefined === this.m_frame) {
                    this.frame(
                        new mofron.comp.Frame({
                            style  : { 'text-align' : 'center' },
                            //radius : 50
                        })
                    );
                }
                return this.m_frame;
            }
            /* setter */
            if (false === mofron.func.isInclude(frm, 'Frame')) {
                throw new Error('invalid parameter');
            }
            this.m_frame = frm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    size (val) {
        try {
            if (undefined === val) {
                /* getter */
                return this.frame().size();
            }
            /* setter */
            this.frame().size(val,val);
            this.frame().radius(val/2);
            super.size( val - (val/10) * 2 );
            this.target().style({
                'top' : (val/10) + 'px'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.IconAwesome;
