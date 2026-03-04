import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loading = false;
    });
  }

  save(): void {
    this.albumService.updateAlbum(this.album).subscribe();
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}