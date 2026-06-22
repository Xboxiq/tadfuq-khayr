Case-priority selector — set the urgency of a service request. VIP gets a gold sheen when active.

```jsx
<SLATag level="standard" active />
<SLATag level="urgent" />
<SLATag level="vip" />
```

Levels: `standard` (blue), `urgent` (crimson), `vip` (gold gradient). `active` fills the pill. Defaults to Arabic labels (اعتيادي / عاجل / VIP); pass children to override.
